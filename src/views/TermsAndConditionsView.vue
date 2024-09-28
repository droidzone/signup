<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Non-Disclosure and Non-Compete Agreement</h1>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="p-4 border rounded shadow-sm">
          <!-- <h2 class="mb-4">MyOPIP Clinic Management Software NDA and Non-Compete</h2> -->
          <div class="terms-content mb-4" style="max-height: 400px; overflow-y: auto">
            <p>
              This Non-Disclosure Agreement (the "Agreement") is entered into on
              {{ formatDate(currentDate) }} between:
            </p>
            <p>
              <strong>{{ companyName }}</strong
              >, the owner of MyOPIP clinic management software ("Discloser")
            </p>
            <p>
              <strong>{{ recipientName }}</strong
              >, residing at {{ recipientAddress }} (Hereafter, called the "Recipient")
            </p>

            <h3>1. Purpose</h3>
            <p>
              The purpose of this Agreement is to protect the confidential and proprietary
              information of the Discloser in relation to the trial access of MyOPIP Clinic
              Management Software, EazyEMR, or other present or future derivatives of the software
              (collectively referred to as the "Software") provided to the Recipient for testing
              purposes.
            </p>

            <h3>2. Confidential Information</h3>
            <p>
              "Confidential Information" includes, but is not limited to, the Software, its
              features, functionality, user interface, underlying code, algorithms, and any related
              documentation or materials provided by the Discloser. It also includes any information
              obtained by the Recipient from the use of the software, with or without the
              Discloser's explicit consent.
            </p>

            <h3>3. Declarations and Obligations of the Recipient</h3>
            <h4>3.1 Declarations:</h4>
            <p>The Recipient hereby declares and warrants that:</p>
            <ul>
              <li>
                They are not developing, consulting, or otherwise involved in any clinic management
                software, electronic medical record (EMR) system, or any software with functionality
                or intended target market as MyOPIP.
              </li>
              <li>
                They are not involved as a member of the board of directors, founder, or stakeholder
                in any related competing software or any other software with functionality similar
                to, similiar target audience as MyOPIP.
              </li>
              <li>
                All information provided to the Discloser regarding their background and
                affiliations is true and complete.
              </li>
            </ul>

            <h4>3.2 Obligations:</h4>
            <p>The Recipient agrees to:</p>
            <ul>
              <li>Keep the Confidential Information strictly confidential;</li>
              <li>
                Use the Confidential Information solely for the purpose of testing the Software;
              </li>
              <li>
                Not copy, reproduce, distribute, disclose, or transfer any Confidential Information
                to any third party;
              </li>
              <li>
                Not store as screenshots, photos, printout, video, audio files, compressed files,
                encrypted files, or other digital, manual or other form that can be stored, or
                transmitted;
              </li>
              <li>Not reverse engineer, decompile, or disassemble the Software;</li>
              <li>
                Not use the Confidential Information to create any competing product or service;
              </li>
              <li>
                Not use the features or functionality of the Software as a basis for developing any
                new software or enhancing existing software;
              </li>
              <li>
                Not share access to the Software with any third party unless explicitly permitted by
                an additional license agreement;
              </li>
              <li>Not share the user credentials with any third party individual or company;</li>
              <li>
                Not make, keep, or use any screenshots, photos, screen captures, or videos of the
                Software beyond the testing period;
              </li>
              <li>
                Destroy any digital copies, screenshots, photos, screen captures, and videos of the
                Software at the end of the testing period or upon request by the Discloser,
                whichever is earlier;
              </li>
              <li>
                Return or destroy all Confidential Information upon the completion of the testing
                period or at the Discloser's request;
              </li>
              <li>
                Immediately inform the Discloser of any changes to their status as declared in
                section 3.1 during the term of this Agreement;
              </li>
              <li>
                Acknowledge that any false information or failure to disclose relevant information
                related to the declarations in section 3.1 shall be construed as causing irreparable
                harm to the Discloser;
              </li>
              <li>
                Not become involved in any competing product or software with similar functionality
                to MyOPIP for a period of five (5) years from the date of this Agreement, without
                first obtaining explicit written permission from the Discloser;
              </li>
              <li>
                If the Recipient wishes to be involved in any competing product or software with
                similar functionality to MyOPIP after the five-year period, they must first inform
                the Discloser in writing and obtain explicit permission before proceeding with such
                involvement;
              </li>
              <li>
                Acknowledge that involvement in any competing product or software without proper
                disclosure and permission may result in liability for compensation to the Discloser,
                the amount of which shall be determined either by mutual agreement or by a court of
                competent jurisdiction.
              </li>
            </ul>

            <h3>4. Term and Termination</h3>
            <p>
              4.1 This Agreement shall remain in effect for a period of 5 years from the date of
              execution or until terminated by the Discloser with written notice. The obligations of
              confidentiality shall survive the termination of this Agreement.
            </p>
            <p>
              4.2 The testing period for the Software shall last for 1 month from the date of this
              Agreement, unless terminated earlier by the Discloser. At the end of this period or
              upon earlier termination, the Recipient shall immediately cease all use of the
              Software and comply with all obligations regarding the return or destruction of
              Confidential Information.
            </p>
            <p>
              4.3 It is explicitly understood and agreed that the removal of access to the Software
              does not constitute termination of this Agreement. This Agreement shall continue to
              prevail in full force and effect until it is explicitly terminated by the Discloser
              through written notice, regardless of whether the Recipient has access to the Software
              or not.
            </p>

            <h3>5. Remedies</h3>
            <p>
              5.1 The Recipient acknowledges that any breach of this Agreement may result in
              irreparable harm to the Discloser. In the event of a breach, the Discloser shall be
              entitled to seek injunctive relief in addition to any other remedies available at law
              or in equity.
            </p>
            <p>
              5.2 In the event that any declaration made by the Recipient in section 3.1 is found to
              be false or if the Recipient has failed to disclose any relevant information related
              to these declarations, the Recipient agrees that:
            </p>
            <ul>
              <li>This shall be construed as causing irreparable harm to the Discloser.</li>
              <li>
                They shall be liable for damages, the amount of which shall be determined by a court
                of competent jurisdiction.
              </li>
              <li>
                They shall bear all legal costs and fees incurred by the Discloser in pursuing such
                action.
              </li>
            </ul>
            <p>
              5.3 In the event that the Recipient becomes involved in any competing product or
              software in violation of the obligations set forth in section 3.2, the Recipient
              agrees that:
            </p>
            <ul>
              <li>
                They shall be liable for any damages incurred by the Discloser as a result of such
                involvement.
              </li>
              <li>
                They may be required to pay compensation to the Discloser, the amount of which shall
                be determined either by mutual agreement or by a court of competent jurisdiction.
              </li>
              <li>
                The Discloser shall be entitled to seek injunctive relief to prevent any further
                involvement in competing products or software.
              </li>
            </ul>

            <h3>6. Governing Law and Jurisdiction</h3>
            <p>
              6.1 Governing Law: This Agreement shall be governed by and construed in accordance
              with the laws of India. However, where the Recipient is located in the United States,
              European Union, Australia, or the United Kingdom, the applicable laws of those
              jurisdictions shall apply to the extent required by their respective mandatory
              provisions.
            </p>
            <p>
              6.2 Jurisdiction: Any dispute arising out of or in connection with this Agreement,
              including any question regarding its existence, validity, or termination, shall be
              subject to the exclusive jurisdiction of the courts in Trivandrum, Kerala, India. The
              parties hereby irrevocably submit to the jurisdiction of these courts and waive any
              objection to proceedings in these courts on the ground of venue or on the ground that
              proceedings have been brought in an inconvenient forum.
            </p>
            <p>
              6.3 Alternative Dispute Resolution: Before resorting to formal legal proceedings, the
              parties agree to attempt to resolve any dispute arising out of or in connection with
              this Agreement through mediation. The mediation shall take place in Trivandrum,
              Kerala, India, unless otherwise agreed by both parties.
            </p>

            <h3>7. Entire Agreement</h3>
            <p>
              This Agreement constitutes the entire understanding between the parties with respect
              to the subject matter hereof and supersedes all prior agreements, oral or written,
              made with respect thereto.
            </p>

            <h3>8. Severability</h3>
            <p>
              If any provision of this Agreement is found to be invalid, illegal, or unenforceable,
              the remaining provisions shall remain in full force and effect, and the invalid,
              illegal, or unenforceable provision shall be modified to the extent necessary to
              render it valid, legal, and enforceable while preserving its intent.
            </p>

            <h3>9. Amendments</h3>
            <p>
              The Agreement may at any time be amended, revised or terminated by the Discloser
              without prior intimation.
            </p>

            <h3>10. Version</h3>
            <p>Version: 1.0 ({{ formatDate(currentDate) }})</p>
          </div>
          <div class="mb-3">
            <h3>11. Digital Signature</h3>
            <p>
              By typing your full name below and clicking "Accept and Sign Up", you acknowledge that
              you have read, understood, and agree to be bound by the terms of this Non-Disclosure
              and Non-Compete Agreement. This digital signature shall have the same legal effect as
              a handwritten signature.
            </p>
            <div class="form-group mb-3">
              <label for="digitalSignature" class="form-label"
                >Full Name (Digital Signature):</label
              >
              <input
                type="text"
                class="form-control"
                id="digitalSignature"
                v-model="digitalSignature"
                required
              />
            </div>
            <div class="form-check mb-3 d-flex align-items-center">
              <input class="form-check-input" type="checkbox" v-model="accepted" id="acceptTerms" />
              <label class="form-check-label me-3" for="acceptTerms">
                I have read and agree to the Non-Disclosure and Non-Compete Agreement
              </label>
              <button
                v-if="accepted"
                @click="generatePDF"
                class="btn btn-outline-primary btn-sm"
              >
                Download Signed Agreement
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button @click="goBack" class="btn btn-secondary">Back to Form</button>
            <button
              @click="submitForm"
              class="btn btn-primary"
              :disabled="!accepted || !digitalSignature"
            >
              Accept and Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '../stores/formStore'
import { jsPDF } from 'jspdf'

const router = useRouter()
const formStore = useFormStore()

const accepted = ref(false)
const digitalSignature = ref('')
const currentDate = new Date()
const companyName = 'Geekmaze Software Pvt Ltd'
const recipientName = ref('')
const recipientAddress = ref('')

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

onMounted(() => {
  recipientName.value = formStore.fullName
  recipientAddress.value = formStore.address
})

const goBack = () => {
  router.push('/')
}

const submitForm = () => {
  if (accepted.value && digitalSignature.value) {
    const formData = {
      ...formStore.$state,
      ndaAccepted: true,
      ndaAcceptanceDate: currentDate,
      digitalSignature: digitalSignature.value
    }

    // Handle form submission here
    console.log('Form submitted with accepted NDA and digital signature', formData)

    // Save form data
    formStore.setFormData(formData)

    // Redirect to additional info page
    router.push('/additional-info')
  }
}

const generatePDF = () => {
  const doc = new jsPDF()
  
  // Add content to the PDF
  doc.setFontSize(16)
  doc.text('Non-Disclosure and Non-Compete Agreement', 20, 20)
  
  doc.setFontSize(12)
  doc.text(`Date: ${formatDate(currentDate)}`, 20, 30)
  doc.text(`Between: ${companyName}`, 20, 40)
  doc.text(`And: ${recipientName.value}`, 20, 50)
  doc.text(`Address: ${recipientAddress.value}`, 20, 60)
  
  // Add the full agreement text
  doc.setFontSize(10)
  const agreementText = document.querySelector('.terms-content').innerText
  const splitText = doc.splitTextToSize(agreementText, 180)
  doc.text(splitText, 20, 70)
  
  // Add signature and acceptance date
  const lastY = doc.internal.getNumberOfPages() > 1 ? doc.internal.pageSize.height - 20 : 270
  doc.text(`Digital Signature: ${digitalSignature.value}`, 20, lastY)
  doc.text(`Accepted on: ${formatDate(currentDate)}`, 20, lastY + 10)
  
  // Save the PDF
  doc.save('NDA_Agreement.pdf')
}
</script>
