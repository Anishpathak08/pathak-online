import { FaWhatsapp } from 'react-icons/fa6'
export default function WhatsAppFab(){
  return (
    <a href="https://wa.me/9779863446644" target="_blank" aria-label="WhatsApp"
       className="wa-fab bg-green-500 text-white hover:bg-green-600">
      <FaWhatsapp size={24}/>
    </a>
  )
}
