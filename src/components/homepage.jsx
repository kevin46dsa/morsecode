import React from 'react';
import { useState} from 'react';

function Home() {
    const [data, setData] = useState({ email: ''});
    const [MorseCode, setMorseCode]= useState("");
    const morseCodeHash = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
            let sentance = data.email
            let finalconcat = "";
            let space = "/"
            if( /[^a-zA-Z ]/.test( sentance ) ) {
                alert('Input is not alphanumeric');
            }
            else{
            for (let l = 0; l < sentance.length; l++) {
                if(sentance[l] === " "){
                    finalconcat += space;
                }
                else{
                    finalconcat += morseCodeHash[sentance[l]];
                }
               
            }
        
            setMorseCode(finalconcat);

        }
    }

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  return (
    <div>
      <form onSubmit={handleSubmit}>
						<h1>Generate Morse Code</h1>
                        <h2>This program converts English Text into Morse Code</h2>
                        <p>The input takes in only English Characters form A-Z and a-z, Space is Denoted by "/"</p>
                        <p>Special Characters and Numbers are not allowed</p>
                        <p>go on and impress your friends with this Morse Code Generator!! Thank You !!</p>
						<label htmlFor="loginemail">Enter English text to convert to morse code</label>
						<input
							id="loginemail"
							type="text"
							placeholder="Enter Here...."
							name="email"
							onChange={handleChange}
							value={data.email}
							
						/>
						
						
						<button className="btn btn-success btn-round-lg btn-lg ">
							<span>Generate Morse Code</span>
						</button>
					</form>
                    <h3>{MorseCode}</h3>
    </div>
  )
}

export default Home;
