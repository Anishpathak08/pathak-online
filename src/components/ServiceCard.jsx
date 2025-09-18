import { motion } from 'framer-motion'

export default function ServiceCard({icon, title, text}){
  return (
    <motion.div
      initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }}
      transition={{duration:0.5}}
      className="p-6 rounded-2xl shadow-soft bg-white border hover:-translate-y-1 transition"
    >
      <div className="text-2xl text-brand mb-3">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm mt-1 text-slate-600">{text}</p>
    </motion.div>
  )
}
