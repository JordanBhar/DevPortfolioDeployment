import {socialMedia} from '../constants';

export const Socials = () => {
  return (
    <ul className="fixed bottom-20 right-5">
        <li key={socialMedia.id}>
            {socialMedia.map((social, index) => (
                <a href={social.link}>
                    <img src={social.icon} className="py-3 h-[60px] w-[60px]"></img>
                </a>
            ))}
        </li>
    </ul>
  )
}

export default Socials
