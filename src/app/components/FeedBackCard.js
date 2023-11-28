import styles from "../styles"
import ButtonRead from "./ButtonRead"
import Image from "next/image"

const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className='bg-slate-white shadow-black  shadow-lg flex justify-between flex-col rounded-[20px] max-w-[370px] feedback-card items-start'>
      <Image src={img} alt={name} className="  shadow-black sm:ml-0 shadow-sm" height={400} width={400} />
      <h4 className={`${styles.paragraph2} text-primary my-5 sm:leading-7 leading-5`}>{title}</h4>
      <ButtonRead/>
    </div>
  )
}

export default FeedbackCard