const menu=document.querySelector('.menu');const links=document.querySelector('.links');if(menu&&links){menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}const form=document.getElementById('enquiry');if(form){form.addEventListener('submit',event=>{event.preventDefault();const d=new FormData(form);const subject='inSpiRe course enquiry: '+d.get('course');const body=`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\nCourse: ${d.get('course')}\nMessage: ${d.get('message')}`;location.href='mailto:inspire.healthcode@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);});}
// Give visitors control over decorative homepage video playback.

/* =========================================
   FREE DEMO POPUP
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const demoOverlay = document.getElementById("demoOverlay");
    const closeDemo = document.getElementById("closeDemo");
    const demoForm = document.getElementById("demoForm");

    if (!demoOverlay || !closeDemo || !demoForm) {
        return;
    }

    let previousFocus = null;

    // OPEN POPUP AUTOMATICALLY

    function openDemoPopup() {
        previousFocus = document.activeElement;
        demoOverlay.classList.add("show");
        document.body.style.overflow = "hidden";
        closeDemo.focus();
    }

    // CLOSE POPUP

    function closeDemoPopup() {
        demoOverlay.classList.remove("show");
        document.body.style.overflow = "";

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    }

    // SHOW POPUP AFTER PAGE LOAD

    setTimeout(openDemoPopup, 1000);

    // CLOSE USING X BUTTON

    closeDemo.addEventListener("click", closeDemoPopup);

    // CLOSE WHEN CLICKING OUTSIDE

    demoOverlay.addEventListener("click", function (event) {

        if (event.target === demoOverlay) {
            closeDemoPopup();
        }

    });

    // CLOSE USING ESCAPE KEY
    // KEEP KEYBOARD FOCUS INSIDE THE OPEN DIALOG

    document.addEventListener("keydown", function (event) {

        if (!demoOverlay.classList.contains("show")) {
            return;
        }

        if (event.key === "Escape") {
            closeDemoPopup();
            return;
        }

        if (event.key === "Tab") {
            const focusable = Array.from(
                demoOverlay.querySelectorAll(
                    'button:not([disabled]), input:not([disabled]), select:not([disabled])'
                )
            ).filter(element => element.getClientRects().length > 0);

            if (!focusable.length) {
                event.preventDefault();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

    });

    // FORM SUBMISSION

    demoForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const formData = new FormData(demoForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const age = formData.get("age");
        const qualification = formData.get("qualification");
        const location = formData.get("location");
        const course = formData.get("course");

        const subject = "Free Demo Class Booking - inSpiRe";

        const message = `
FREE DEMO CLASS ENQUIRY

Name: ${name}
Email: ${email}
Phone: ${phone}
Age: ${age}
Qualification: ${qualification}
Location: ${location}
Interested Course: ${course}

Please contact me regarding a free demo class.
        `;

        const mailtoLink =
            "mailto:inspire.healthcode@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(message);

        window.location.href = mailtoLink;

    });

});


/* COURSES MOBILE DROPDOWN */

document.querySelectorAll(".courses-dropdown").forEach(function(dropdown) {

    const arrow = dropdown.querySelector(".courses-arrow");

    if (!arrow) return;

    arrow.addEventListener("click", function() {

        const isOpen = dropdown.classList.toggle("open");

        arrow.setAttribute("aria-expanded", String(isOpen));

    });

});