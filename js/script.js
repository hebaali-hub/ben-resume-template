var heading = document.getElementsByClassName("accord");
var i;
for (var i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var vdesc = this.nextElementSibling;


        if (vdesc.style.maxHeight) {
            vdesc.style.maxHeight=null;
        } else {
            vdesc.style.maxHeight = vdesc.scrollHeight+"px";

        }
    });
}
