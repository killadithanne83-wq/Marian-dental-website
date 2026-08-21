document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    if (!form) {
        console.error("Appointment form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get patient information
        const fullName =
            document.getElementById("fullName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const gender =
            document.getElementById("gender").value;

        const doctor =
            document.getElementById("preferredDoctor").value;

        const reason =
            document.getElementById("reason").value.trim();

        const date =
            document.getElementById("preferredDate").value;

        const time =
            document.getElementById("preferredTime").value;

        const message =
            document.getElementById("message").value.trim();


        // Check required fields
        if (!fullName) {
            alert("Please enter your full name.");
            document.getElementById("fullName").focus();
            return;
        }


        if (!phone) {
            alert("Please enter your phone number.");
            document.getElementById("phone").focus();
            return;
        }


        // Validate phone number
        const cleanPhone =
            phone.replace(/[\s\-()]/g, "");

        const phoneDigits =
            cleanPhone
                .replace(/^\+91/, "")
                .replace(/^91/, "")
                .replace(/^0/, "");


        if (!/^\d{10}$/.test(phoneDigits)) {

            alert("Please enter a valid 10-digit phone number.");

            document.getElementById("phone").focus();

            return;
        }


        // ==========================================
        // CLINIC WHATSAPP NUMBER
        // ==========================================

        const clinicWhatsApp =
            "917558859848";


        // ==========================================
        // CREATE WHATSAPP MESSAGE
        // ==========================================

        const whatsappMessage =

`🦷 *MARIAN DENTAL CARE*
*New Appointment Request*

*Patient Name:* ${fullName}
*Patient Phone:* ${phone}
*Gender:* ${gender || "Not specified"}
*Preferred Doctor:* ${doctor || "Not specified"}
*Reason for Visit / Treatment:* ${reason || "Not specified"}
*Preferred Date:* ${date || "Not specified"}
*Preferred Time:* ${time || "Not specified"}

*Additional Message:*
${message || "None"}

Please confirm the appointment based on clinic availability.`;


        // ==========================================
        // CREATE WHATSAPP URL
        // ==========================================

        const whatsappURL =
            "https://wa.me/" +
            clinicWhatsApp +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        // ==========================================
        // OPEN WHATSAPP
        // ==========================================

        window.location.href = whatsappURL;

    });

});