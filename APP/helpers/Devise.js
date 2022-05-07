/*c'est module qui contient des fonction pour utilse a la page de devise */


function Nomdevise(devise) {/*fonction retourne nom devise et son image */
    let content={};
    switch (devise){
        case 'aed':{
            content.nom='Dirham Des Émirats Arabes Unis';
            content.img='../images/flags/aed.png';
            return content;
        }
        
        case 'bhd' :{

         
            content.nom='Dinar Bahreïni';
            content.img='../images/flags/bhd.png';
            return content;
        }
        case 'cad' :{

          
            content.nom='Dollar Canadien';
            content.img='../images/flags/cad.png';
            return content;
        }
         
        
        case 'chf':{

       
            content.nom='Franc Suisse';
            content.img='../images/flags/chf.png';
            return content;
        }
            
        
        case 'cny' :
            {

              
                content.nom='Yuan Chinois';
                content.img='../images/flags/cny.png';
                return content;
            }
        
        
        case 'dkk' :{

     
            content.nom='Couronne Danoise';
            content.img='../images/flags/dkk.png';
            return content;
        }
         
        
        case 'dzd' :
            {
                
                content.nom='Dinar Algérien';
                content.img='../images/flags/dzd.png';
                return content;
            }
           
        
        case 'eur' :
            {
            
                content.nom='Euro';
                content.img='../images/flags/eur.png';
                return content;
            }
           
        case 'gbp' :
            {
               
                content.nom='Livre Sterling';
                content.img='../images/flags/gbp.png';
                return content;
            }
          
        
        case 'jpy' : {
     
            content.nom='Yen Japonais';
            content.img='../images/flags/jpy.png';
            return content;
        }
   
        case 'kwd' : {
      
            content.nom='Dinar Koweitien';
            content.img='../images/flags/kwd.png';
            return content;
        }
        
        case 'lyd' :
            {
          
                content.nom='Dinar Libyen';
                content.img='../images/flags/lyd.png';
                return content;
            }

          
        
        case 'mad' :
            {
       
                content.nom='Dirham Marocain';
                content.img='../images/flags/mad.png';
                return content;
            }
          
       
        case 'mro' :
            {
              
                content.nom='Ouguiya Mauritanien';
                content.img='../images/flags/mro.png';
                return content;
            }
           
     
        case 'nok' :
            {
           
                content.nom='Couronne Norvégienne';
                content.img='../images/flags/nok.png';
                return content;
            }
      
     
        case 'qar' :
            {
                
                content.nom='Riyal Qatari';
                content.img='../images/flags/qar.png';
                return content;
            }
          
   
        case 'sar' :
            {
          
                content.nom='Riyal Saoudien';
                content.img='../images/flags/sar.png';
                return content;
            }
          
        
        case 'sek' :
            {
               
                content.nom='Couronne Suedoise';
                content.img='../images/flags/sek.png';
                return content;
            }
           
        
        case 'usd' :
            {
               
                content.nom='Dollar Américain';
                content.img='../images/flags/usd.png';
                return content;
            }
           
        


    }
}

function unite(str) {/*fonction retourne unite de devise et convertie en entier */
    let stri=parseFloat(str.substring(0,str.indexOf(" ")));
    return stri;
}
module.exports = {
    Nomdevise ,unite
}