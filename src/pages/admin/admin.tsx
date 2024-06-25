import { useState } from "react";
import { Button } from "../../shared/button/Button";
import "./Admin.css";
import { InputWithLabel } from "../../shared/inputWithLabel/InputWithLabel";
import noPhoto from "../../assets/images/person-anom.png";

export function Admin() {
  const [selectionInput, setSelectionInput] = useState("");
  const [isOpenedModalAdd, setIsOpenedModalAdd] = useState(false);
  const [selectInputModalAdd, setSelectInputModalAdd] = useState("");

  const [inputSearch, setInputSearch] = useState("");

  const [inputNameAdd, setInputNameAdd] = useState("");
  const [inputDateAdd, setInputDateAdd] = useState("");
  const [inputEmailAdd, setInputEmailAdd] = useState("");
  const [inputRAAdd, setInputRAAdd] = useState("");
  const [inputFileAdd, setInputFileAdd] = useState<File | null>(null);

  const handleOpenModalAdd = () => {
    setIsOpenedModalAdd(!isOpenedModalAdd);
  };

  return (
    <div className="container-admin">
      <main className="main-admin">
        <InputWithLabel
          nameId="inputSearch"
          type="text"
          placeholder="Procure pelo nome ou RA aqui..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <select
          id="selection"
          value={selectionInput}
          onChange={(e) => setSelectionInput(e.target.value)}
          className="inputShared"
        >
          <option value="">Selecione</option>
          <option value="Alunos">Alunos</option>
          <option value="Professores">Professores</option>
          <option value="1A">1A</option>
          <option value="1B">1B</option>
          <option value="1C">1C</option>
        </select>
        <Button type="button" text="ADICIONAR" onClick={handleOpenModalAdd} />
      </main>

      <table>
        <thead>
          <tr>
            <th>RA</th>
            <th>NOME</th>
            <th>OPÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
          <tr>
            <td>4906129</td>
            <td>José Pedro Da Silva</td>
            <td>
              <Button
                text="ALTERAR"
                type="button"
                onClick={() => console.log("alterado")}
              />
              <Button
                text="REMOVER"
                type="button"
                onClick={() => console.log("Removido")}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className={isOpenedModalAdd ? "modalAdd opened" : "modalAdd closed"}>
        <div className="modalAddContainer">
          <div className="sidebarModalAdd">
            {inputFileAdd ? (
              <img
                src={URL.createObjectURL(inputFileAdd)}
                alt="foto da pessoa"
                className="imgSidebarModalAdd"
              />
            ) : (
              <img
                src={noPhoto}
                alt="pessoa sem foto"
                className="imgSidebarModalAdd"
              />
            )}
            <span className="dataUser">{inputNameAdd}</span>
            <span className="dataUser">{inputEmailAdd}</span>
            <span className="dataUser">{inputRAAdd}</span>
            <span className="dataUser">{inputDateAdd}</span>
          </div>

          <div className="addPerson">
            <h2>ESTA ADICIONANDO QUEM?</h2>
            <select
              name="selectionModalAdd"
              value={selectInputModalAdd}
              onChange={(e) => setSelectInputModalAdd(e.target.value)}
              className="inputShared"
            >
              <option value="">Selecione a lista que deseja coloca-lo</option>
              <option value="Alunos">Alunos</option>
              <option value="Professores">Professores</option>
            </select>
            <div className="addPersonInputs">
              <InputWithLabel
                nameId="inputAddName"
                placeholder="Lucas Silveira Martins"
                text="Digite o nome:"
                type="text"
                value={inputNameAdd}
                onChange={(e) => setInputNameAdd(e.target.value)}
              />
              <InputWithLabel
                nameId="inputAddEmail"
                text="Data de nascimento:"
                type="date"
                value={inputDateAdd}
                onChange={(e) => setInputDateAdd(e.target.value)}
              />

              <InputWithLabel
                nameId="inputAddEmail"
                placeholder="lucas.silva31@emefpajo.com.br"
                text="Crie o Email:"
                type="email"
                value={inputEmailAdd}
                onChange={(e) => setInputEmailAdd(e.target.value)}
              />
              <InputWithLabel
                nameId="inputAddRA"
                placeholder="1234567"
                text="Crie o RA:"
                type="text"
                value={inputRAAdd}
                onChange={(e) => setInputRAAdd(e.target.value)}
              />
              <InputWithLabel
                nameId="inputFileAdd"
                text="Selecione uma foto"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setInputFileAdd(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div className="btnsModal">
              <Button
                text="CANCELAR"
                type="button"
                onClick={handleOpenModalAdd}
              />
              <Button text="CONCLUIDO" type="button" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
