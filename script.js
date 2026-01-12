  
document.addEventListener("DOMContentLoaded", function() {
    // جلب جميع أزرار "إضافة إلى السلة"
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // الحصول على بيانات المنتج
            const productDiv = this.closest(".product");
            const product = {
                id: productDiv.getAttribute("data-id"),
                name: productDiv.getAttribute("data-name"),
                price: productDiv.getAttribute("data-price"),
                quantity: 1
            };

            // جلب المنتجات الموجودة في السلة من localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // التحقق مما إذا كان المنتج موجودًا بالفعل في السلة
            let existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++; // زيادة الكمية
            } else {
                cart.push(product);
            }

            // حفظ السلة في localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            confirm(" VOUS AVEZ AJOUTER UN PRODUIT");
        });
    });
});


/*script form*/



function rem (){
            
    const nom =
    document.getElementById('name').value.trim();//trim() est une fonction qui suprime les espace enter les valeur taper par l utilisateur
    const email =
    document.getElementById('email').value.trim();
    const password =
    document.getElementById('password').value.trim();
    const telephon =
    document.getElementById('tel').value.trim();
    
    
    
    if(!nom || !email || !password ||!telephon){
        alert('tous les champ sont requis' );
          
    }// !nom c'est a dire que valeur de a est nulle 
     
    if(!email.includes('@') || !email.includes('.')){
         alert('les email doit contenir @ et .'); 
        
    } // includes pour dire ne contient pas
       else if ( password.length < 6){
        alert('le mot de passe doit contenir ou moins 6 caracter' );
        
    }  //length determine le longeur d un element
         else { alert('Formilaire envoyer avec succes !'+'vous pouvez acheter nos produits maintenant');}
    }
    
  
    // Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
