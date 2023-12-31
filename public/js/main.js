// let itemParent = document.querySelector('nav.navbar ul.menu-list li.item-parent');
// let itemChild = document.querySelector('nav.navbar ul.menu-list li.item-parent .submenu');
// itemParent.addEventListener('mouseenter', function() {
//     itemChild.style.visibility = "visible"
// })
// itemChild.addEventListener('mouseover', function() {
//     itemChild.style.visibility = "visible"
// })
// itemChild.addEventListener('mouseout', function() {
//     itemChild.style.visibility = "hidden"
// })
change(); 
const playvid = document.querySelector('span.videoPlay');
const stopvid = document.querySelector('span.videoStop');
const popup = document.querySelector('.popup');
// playvid.addEventListener('click', function() {
//     popup.style.display = "flex";
// })
// stopvid.addEventListener('click', function() {
//     popup.style.display = "none";
// })

let navbar = document.querySelector('nav.navbar')
window.addEventListener('scroll', function() {
    if (this.scrollY > 100) {
        navbar.classList.add('fixed')
    } else {
        navbar.classList.remove('fixed')
    }
})
// function sendMail(){
//     var params = {
//         from_name : document.getElementById('name').value,
//         tel : document.getElementById('phone').value,
//         subject : document.getElementById('subject').value,
//         email_id : document.getElementById('email').value,
//         message : document.getElementById('message').value,
//     }
//     emailjs.sendForm("service_6ldcpf1", "template_xt5f61u ", params).then(function(res){
//         alert('succes !'+ res.status)
//     })
//     alert('error !'+ res.status)
// }
const btn = document.getElementById('button');
btn.addEventListener('click', function() {

  btn.value = 'Sending...';
  var params = {
        name : document.getElementById('name').value,
        phone : document.getElementById('phone').value,
        subject : document.getElementById('subject').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    }
  const serviceID = 'service_6ldcpf1';
  const templateID = 'template_xt5f61u';

  emailjs.send(serviceID, templateID, params)
   .then(() => {
     btn.value = 'Send Email';
     alert('Sent!');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });

// emailjs.send("service_6ldcpf1","template_xt5f61u",{
//     from_name: "Moussa",
//     to_name: "moustapha.md26@gmail.com",
//     name: "Moussa",
//     phone: "0656716530",
//     subject: "test subjet",
//     email: "test@gmail.com",
//     message: "test msg",
//     });
// alert('test')
});

$(function() {
    var filterList = {
        init: function() {
            // MixItUp plugin
            // http://mixitup.io
            $('.item-grid').mixItUp({
                selectors: {
                    target: '.item',
                    filter: '.filter'
                },
                load: {
                    filter: 'all' // show app tab on first load
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});

function change() {
    let results = Array.from(document.querySelectorAll('.result > div'));
    let checkboxes = Array.from(document.querySelectorAll('.checkbox label'));
    // Hide all results
    results.forEach(function(result) {
      result.style.display = 'none';
    });
    checkboxes.forEach(function(checkb) {
      checkb.classList.remove('filterChecked');
    });
    // Filter results to only those that meet ALL requirements:
    Array.from(document.querySelectorAll('.filter input[rel]:checked'), function(input) {
        const attrib = input.getAttribute('rel');
        input.parentElement.classList.add('filterChecked');
        results = results.filter(function(result) {
            return result.classList.contains(attrib);
        });
    });
    // Show those filtered results:
    results.forEach(function(result) {
        result.style.display = 'flex';
    });
}
