// import React, { Component } from "react";
// import "./App.css";
// export default class Counter extends Component {
//   state = {
//     initialCount: this.props.initialCount,
//     count: this.props.initialCount,
//   };
//   setCount = (newValue) => {
//     this.setState({ count: newValue });
//   };
//   render() {
//     let initialCount = this.state.initialCount;
//     let currentCount = this.state.count;
//     return (
//       <div className="container">
//         <h1>Count: {currentCount}</h1>
//         <button className="btn" onClick={() => this.setCount(initialCount)}>Reset</button>
//         <button className="btn" onClick={() => this.setCount(currentCount - 1)}>-</button>
//         <button className="btn" onClick={() => this.setCount(currentCount + 1)}>+</button>
//       </div>
      
//     );
//   }
// }
// Counter.defaultProps = { initialCount: 0 };

// Hook

import React, { useState } from "react";
import "./App.css";
export default function Counter ({initialCount = 0}) {
  // ประกาศconstโดยเป็นตัวแปรกับชื่อฟังก์ชั่น ให้=usestateที่รับค่าพารามิเตอร์เป็นค่าdefault
  const [count,setCount] = useState(initialCount);
  
        return (
          <div className="container">
            <h1>Count: {count}</h1>
            <button className="btn" onClick={()=>setCount(initialCount)}>Reset</button>
            <button className="btn" onClick={()=>setCount(count - 1)}>-</button>
            <button className="btn" onClick={()=>setCount(count + 1)}>+</button>
          </div>
            
        );
}
