import { useContext, useEffect, useState } from "react";
import { Button } from "../../shared/button/Button";
import "./Admin.css";
import { InputWithLabel } from "../../shared/inputWithLabel/InputWithLabel";
import noPhoto from "../../assets/images/person-anom.png";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../firebase/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { AllPeopleProps } from "../../assets/interface/interfaces";
import { Notification } from "../../components/notification/Notification";
import { ContextAuthProvider } from "../../context/auth";

export function Admin() {
  const { showNotification } = useContext(ContextAuthProvider);

  const [allPeople, setAllPeople] = useState<AllPeopleProps[]>([]);
  const [selectionInput, setSelectionInput] = useState("");
  const [isOpenedModalAdd, setIsOpenedModalAdd] = useState(false);
  const [selectInputModalAdd, setSelectInputModalAdd] = useState("");

  const [inputSearch, setInputSearch] = useState("");

  const [inputNameAdd, setInputNameAdd] = useState("");
  const [inputDateAdd, setInputDateAdd] = useState("");
  const [inputEmailAdd, setInputEmailAdd] = useState("");
  const [inputRAAdd, setInputRAAdd] = useState("");
  const [inputFileAdd, setInputFileAdd] = useState<File | null>(null);

  useEffect(() => {
    if (selectionInput !== "") renderItem();
  }, [selectionInput, isOpenedModalAdd]);

  const renderItem = async () => {
    const querySnapshot = await getDocs(collection(db, `${selectionInput}`));
    const items = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as AllPeopleProps[];
    items.sort();
    setAllPeople(items);
  };

  const handleOpenModalAdd = () => {
    setIsOpenedModalAdd(!isOpenedModalAdd);
  };

  const handleAdd = async () => {
    if (!inputFileAdd) {
      alert("Nenhum arquivo selecionado para upload");
      return;
    }
    const storageRef = ref(storage, `/${selectInputModalAdd}/${inputRAAdd}`);
    await uploadBytes(storageRef, inputFileAdd);
    const downloadURL = await getDownloadURL(storageRef);

    const data = inputDateAdd;
    const dataFormated = data.split("-").reverse().join("/");

    createUserWithEmailAndPassword(auth, inputEmailAdd, inputRAAdd)
      .then(async () => {
        setDoc(doc(db, `${selectInputModalAdd}`, `${inputRAAdd}`), {
          nome: inputNameAdd,
          date: dataFormated,
          email: inputEmailAdd,
          ra: inputRAAdd,
          imageURl: downloadURL,
        });
      })
      .then(() => {
        showNotification("Adicionado com sucesso", "success");
      })
      .catch((error) => console.log(error));
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

      {allPeople.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>RA</th>
              <th>NOME</th>
              <th>OPÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {allPeople.map((person, index) => (
              <tr key={index}>
                <td>{person.ra}</td>
                <td>{person.nome}</td>
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
            ))}
          </tbody>
        </table>
      ) : (
        <span>Selecione uma lista</span>
      )}

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
                  const files = e.target.files;
                  if (files && files[0]) {
                    setInputFileAdd(files[0]);
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
              <Button text="CONCLUIDO" type="button" onClick={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
