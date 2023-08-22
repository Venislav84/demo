import styles from './button.module.css'
const Button = (props) => {

  const {type, text, onClick, color = "white", backgrounColor = "black", haveBorder = true,} = props;
  const typeEnum = {s: styles.s, m: styles.m, lg: styles.lg, xl: styles.xl,};
  return (
    <button style={{backgroundColor: `${backgrounColor}`, color: `${color}`}}
    className={`${typeEnum[type]} ${haveBorder && styles.borderRadius}`}
    onClick={onClick} 
    >
      {text}
    </button>
  )
}

export default Button