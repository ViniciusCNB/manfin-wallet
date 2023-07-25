import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AcaoProps } from "../../types";

const ApplicationBody = () => {
  const {codigo} = useParams()
  const [acao, setAcao] = useState<AcaoProps>()

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/acao/${codigo}/`)
      .then((response) => response.data)
      .then((data) => setAcao(data))
  }, [codigo])
  
  console.log(acao)
  return (
    <>
      <div>
        <h1>TESTE</h1>
      </div>
    </>
  )
}
 
export default ApplicationBody;