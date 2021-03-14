import React from 'react'
import {inforMySelfRight} from "../ListData"
const InforRight = () => {
    return (
        <div className='inforRight' >
            <h2 className='title' >Giới thiệu</h2>
            <div className='content-mySelt'>
            Xin chào, mình là Hùng. Cảm ơn vì đã xem trang blog cá nhân của mình. <br/>
            Mình hiện đang là một lập trình viên, nhưng xuất thân của mình là một kỹ sư điện, vì vậy cần phải học hỏi rất nhiều thứ.   <br/>
            Mình mong muốn tạo ra blog này, để note lại những tất cả mọi thứ, những thứ mình biết, những thứ mình mày mò tìm hiểu được, và những trải nghiệm mình đã học được khi làm việc. <br/>
            Và thật tuyệt khi có thể chia sẻ những điều đó với mọi người, nhất là những bạn cũng trái ngành như mình. <br/>
            Mình sẽ viết về tất cả mọi thứ, không chỉ riêng về lập trình đâu nha 😊  <br/>
            !!! Chúc mọi người vui vẻ, luôn mạnh mẽ và tiến về phía trước nhé !!!
            </div>

            <div className='infor-mySelfRight'>
                {inforMySelfRight.map(item=>{
                    return(
                        <div className='infor-mySelfRight-item' key={item.id} >
                            <img src={item.images} />
                            <p className='name' >{item.name}</p>
                            <p className='content' >{item.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InforRight
