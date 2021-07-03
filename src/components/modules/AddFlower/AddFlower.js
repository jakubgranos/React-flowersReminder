import React, { useState } from 'react';
import { AddFlowerSection, AddFlowerButton, AddFlowerModal, CloseFlowerModal } from './style';
import AddFlowerForm from './form/AddFlowerForm';
const AddFlower = () => {
	const [activeModal, setActiveModal] = useState('');
	const activateFlowerModal = () => {
		setActiveModal(!activeModal);
	}

	return (
		<AddFlowerSection className={activeModal ? 'active' : null}>
			<AddFlowerButton onClick={activateFlowerModal} />
			<AddFlowerModal className={activeModal ? 'active' : null} >
				<CloseFlowerModal onClick={activateFlowerModal}>
					<span></span>
					<span></span>
				</CloseFlowerModal>
				<h2>Aby dodać kwiatka, wypełnij wszystkie poniższe pola, to proste!</h2>
				<AddFlowerForm></AddFlowerForm>
			</AddFlowerModal>
		</AddFlowerSection>
	)
}

export default AddFlower
