import { useParams } from "react-router-dom"

function ContactUs() {
    const {id}= useParams()
    return <div>
        {
            id
        }
    </div>
}
export default ContactUs;