import React from 'react';

const ChangeForm = props => {
  const { onChangeName, onChangeAge, onChangeAddress, onClick } = props
  
  return (
    <form>
      <h3>정보 변경 폼</h3>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" name="name" onChange={onChangeName}/>

      <label htmlFor="age">나이</label>
      <input type="number" id="age" name="age" onChange={onChangeAge}/>
      
      <label htmlFor="address">주소</label>
      <input type="text" id="address" name="address" onChange={onChangeAddress}/>

      <button type="submit" onClick={onClick}>정보 변경</button>
    </form>
  )
}

export default ChangeForm