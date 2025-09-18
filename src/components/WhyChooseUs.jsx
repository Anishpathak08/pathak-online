import { FaRegClock, FaWhatsapp, FaUserShield } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const items = [
  { icon: <FaUserShield/>, title: 'Reliable service', text: 'Simple, safe and fast service.' },
  { icon: <FaRegClock/>, title: 'Timely service', text: 'Valuing your time with on-time delivery.' },
  { icon: <FaWhatsapp/>, title: 'Online support', text: 'Easy via WhatsApp, phone or message.' },
]

export default function WhyChooseUs(){
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-brand mb-8">Why choose us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i)=>(
            <motion.div
              key={i}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }}
              transition={{duration:0.5, delay:i*0.05}}
              className="p-6 rounded-2xl shadow-soft border bg-white hover:-translate-y-1 transition"
            >
              <div className="text-2xl text-brand mb-3">{it.icon}</div>
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm mt-1 text-slate-600">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
