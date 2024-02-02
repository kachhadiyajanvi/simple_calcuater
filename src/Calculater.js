import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Calculater() {
  let [val, setval] = useState('');
  let [ans, setans] = useState('');
  const handleclick = (e) => {
    setval(val + e.target.value);
  }
  const handlecalculate = () => {
    try {
      setans(eval(val).toString());
    } catch (error) {
      setans('Error');
    }
  }
  const handleclear = () => {
    setval('');
    setans('');
  }
  const handleclean = () => {
    setval(val.substring(0, val.length - 1));
  }
  return (

    <div>
      <form >
        <h3 class="h5 py-3 align-middle">Simple Calculater</h3>
        <table border="1" cellspacing="0" cellpadding="10" align="center" class="bg-light border rounded">

          <tr>
            <td colspan="2"><input type="text" class="py-3 " name="" size="13" value={val}></input></td>
            <td colspan="2"><input type="text" class="py-3 " name="" size="12" value={ans}></input></td>
          </tr>
          <tr>
            <td class=""><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclick} value="%"></input></td>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclear} value="CE"></input></td>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclean} value="C"></input></td>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclick} value="/"></input></td>
          </tr>
          <tr>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" value="7" onClick={handleclick}></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="8"></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="9"></input></td>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclick} value="*"></input></td>
          </tr>
          <tr>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="4"></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="5"></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="6"></input></td>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclick} value="-"></input></td>
          </tr>
          <tr>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="1"></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="2"></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="3"></input></td>
            <td rowspan="2"><input type="button" class="px-3 py-5 btn btn-primary" onClick={handlecalculate} value="="></input></td>

          </tr>
          <tr>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclick} value="."></input></td>
            <td><input class="px-3 py-2 btn btn-light border border-dark" type="button" onClick={handleclick} value="0"></input></td>
            <td><input class="px-3 py-2 btn btn-secondary" type="button" onClick={handleclick} value="+"></input></td>

          </tr>
        </table>
      </form>
    </div>
  );
}

export default Calculater;
