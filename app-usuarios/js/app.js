(function(){
    var people = [];
    var rangeAges = [{label:'15-20', value:'15-20'},{label:'21-30', value:'21-30'},{label:'31-40', value:'31-40'}];
    var btnSave;
    var txtFirstName;
    var txtLastName;
    var ddlAges;
    var tableBody;
    var app = {
        init:function(){
            
            txtFirstName = document.getElementById('txtFirstName');
            txtLastName = document.getElementById('txtLastName');
            ddlAges = document.getElementById('ddlAges');
            
           // console.log(ddlAges.options);
            rangeAges.forEach(function(item, index){
                ddlAges.options.add(app.createElement('option',item));
            });
            tableBody = document.getElementById('table-body');
            btnSave = document.getElementById('btnSave');
            actualizar= document.getElementById('btnact');
            actualizar.addEventListener('click',function(e){
                //console.log(this.value);
                app.update(this.value,app.read(this.value));
                
                })
            btnSave.addEventListener('click', function(e){
                app.create({
                    'first_name':txtFirstName.value,
                    'last_name':txtLastName.value,
                    'age':ddlAges.options[ddlAges.selectedIndex].value
                });
               //app.displayListOfPeople();
                app.displayListOfPeopleCards();
            });
        },
        create:function(person){
            people.push(person);
           // console.log(people);
        },
        read:function(index){
            return people[index];
        },
        actualizar:function(index){
            console.log("estoy en actualizar");
            console.log(index);
            document.getElementById('txtFirstName').value=people[index]['first_name'];
            document.getElementById('txtLastName').value=people[index]['last_name'];
            document.getElementById('ddlAges').value=people[index]['age'];
            btnSave.style.display='none';
            actualizar.style.display='inline-block';
        },
        update:function(index, person){
            //console.log("estoy funcion");
            //console.log(people[index]);
           // console.
            console.log(index);
            people[index]['first_name'] = txtFirstName.value;
            people[index]['last_name'] = txtLastName.value;
            people[index]['age']=ddlAges.options[ddlAges.selectedIndex].value;
            
            //people[index]=person;
            app.displayListOfPeopleCards();
           // app.displayListOfPeople();
            btnSave.style.display='inline-block';
            actualizar.style.display='none';
        },
        delete:function(index){
            people.splice(index,1);
            app.displayListOfPeople();
        },
        displayListOfPeople:function(){
            tableBody.innerHTML = '';
            people.forEach(function(item, index){
                var tr = tableBody.insertRow(-1);
                for(property in item){
                     tr.insertCell(-1).innerHTML = item[property];
                };
                
                var btn = app.createElement('button',{
                    id:'person_' + index,
                    className:'btn-delete',
                    value:index,
                });
                btn.innerHTML = "Eliminar";
                if(btn.addEventListener){
                    btn.addEventListener('click', function(e){
                        app.delete(index);
                    });
                }else{
                    btn.attachEvent('onclick', function(e){
                        app.delete(index);
                    });
                }
                var btna = app.createElement('button',{
                    id:'Actualiza_' + index,
                    className:'btn-delete',
                    value:index,
                });
                 btna.innerHTML = "Editar";
                  if(btna.addEventListener){
                    btna.addEventListener('click', function(e){
                       app.actualizar(index);
                        //console.log("editar:"+index)
                        actualizar.value=index;
                    });
                }else{
                    btna.attachEvent('onclick', function(e){
                        app.actualizar(index);
                    });
                }
                
                tr.insertCell(-1).appendChild(btn); 
                tr.insertCell(-1).appendChild(btna);
            });
        },
        displayListOfPeopleCards:function(){
            var list = document.getElementById('people-cards');
            list.innerHTML = '';

            people.forEach(function(item, index){
                
                list.innerHTML+=app.createCardView(item,index);
                
                editar=document.getElementById(index);
                editar.addEventListener('click', function(e){
                        //app.actualizar(index);
                        actualizar.value=index;
                        console.log(index);
                        
                 });
                    /*var dt = app.createElement('img',{
                    id:'img_' + index,
                    className:'cerrar',
                    value:index
               
                });
                
                dt.addEventListener('click', function(e){
                        app.delete(index);
                    });*/
               // list.appendChild(editar);

            });
            
           
        },
            
        createCardView:function(item,index){
            
           return   '<div class="view">'+ 
                        '<img src="img/1.jpg" />'+ 
                        '<div class="mask">'+ 
                            '<h2>'+item.first_name+'</h2>'+ 
                            '<div class="cerrar">'+ 
                            '<a href="javascript:actualizar()" id=imgcerrar_'+index+' value='+index+'> <img src="img/iconoCerrar.png" > </a>'+ 
                            '<a href="javascript:actualizar('+index+')" id='+index+' value='+index+'> <img src="img/editar.png" value='+index+'> </a>'+
                            '</div>'+  
                            '<a href="#" class="info">'+item.age+'</a>'+ 
                        '</div>'+ 
                    '</div>'
            ;
                         
            console.log("holas");
            //console.log(document.getElementById('edit'));
           
           /* var divcerrar= app.createElement('div',{
                    id:'edit'+index,
                    className:'cerrar',
                    value:index,
                    
                
                });
            btna.addEventListener('click', function(e){
                       app.actualizar(index);
                        //console.log("editar:"+index)
                        actualizar.value=index;
                    });*/
           
           
            
        },
            
        createElement:function(type, attrs){
            var element = document.createElement(type);
            for(property in attrs){
                element[property] = attrs[property];
            };

            return element;
        }
    }
    return app;
})().init();










