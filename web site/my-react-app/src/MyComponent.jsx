import React,{useState} from "react"
function MyComponent(){
    const [name,setName]=useState('guest');
    const updateName=()=>{ setName(" Spongeboo")}
    const [age, setAge]=useState(0)  
    const updateAge=()=>{setAge(age + 1)}
    const [fname,setFname]=useState('')
    const handleChange=(event)=>{setFname(event.target.value.toUpperCase())}

    const [payment,setPayment] = useState("");
    const handlePaymentChange=(event)=>{setPayment(event.target.value)}
    const [choose,setchoice]=useState('');
    function onchoice(event){
        setchoice(event.target.value)
    }
    return(
        <div>
            <p>name:{name}</p>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Set Name</button>
            <input type="text" value={fname} onChange={handleChange} />
            <select  value={payment} onChange={handlePaymentChange}>
                <option value="">select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p value={payment}>payment: {payment} </p>
            <label>
                <input type="radio" value='delivery' checked={choose === 'delivery'} onChange={onchoice}/> delivery
            </label>
            <label>
                <input type="radio" value='pick up' checked={choose === 'pick up'} onChange={onchoice}/> pick up
            </label>
            <p>shipping: {choose}</p>
        </div>
    )
}
export default MyComponent
