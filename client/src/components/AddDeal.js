/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalCloseButton,
	ModalBody,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	Button,
	RadioGroup,
	Radio,
	Flex
} from '@chakra-ui/core'

const AddDeal = () => {
	const initialRef = useRef()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { handleSubmit, register, errors } = useForm()
	const [dealType, setDealType] = useState('Food')
	const [daysActive, setDaysActive] = useState(['Monday'])

	const onCreateDeal = ({
		dealType, daysActive, description, endTime, locationId, startTime
	}, onClose) => {
		console.log({
			dealType, daysActive, description, endTime, locationId, startTime
		})
		onClose()
	}

	return (
		<>
			<Button leftIcon="add" onClick={onOpen} variantColor="orange" variant="solid" minH="40px" w="100%">
				Add New Deal
			</Button>
			<Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size="25rem">
				<ModalOverlay />
				<ModalContent borderRadius={4}>
					<form
						onSubmit={handleSubmit((data) => onCreateDeal(
							{
								dealType,
								daysActive,
								description: data.description,
								endTime: data.endTime,
								locationId: data.locationId,
								startTime: data.startTime
							},
							onClose
						))}
					>
						<ModalHeader>Add Deal</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<FormControl as="fieldset">
								<FormLabel as="legend">Deal Type</FormLabel>
								<RadioGroup
									isInline
									spacing={4}
									ref={initialRef}
									defaultValue="Food"
									onChange={(e) => setDealType(e.target.value)}
								>
									<Radio value="Food">Food</Radio>
									<Radio value="Drink">Drink</Radio>
								</RadioGroup>
							</FormControl>
							<FormControl mt={4} isInvalid={errors.description && errors.description.message}>
								<FormLabel>Description</FormLabel>
								<Input
									name="description"
									ref={register({
										required: 'Please enter a description.'
									})}
									placeholder="Free Drink with $10 order"
								/>
								<FormErrorMessage>
									{errors.description && errors.description.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl mt={4} isInvalid={errors.locationId && errors.locationId.message}>
								<FormLabel htmlFor="location">Location</FormLabel>
								<Select
									ref={register({
										required: 'Please select a location.'
									})}
									name="locationId"
									id="location"
									placeholder="Select a Restaurant"
								>
									<option value="NY Tavern">
										NY Tavern
									</option>
								</Select>
								<FormErrorMessage>
									{errors.locationId && errors.locationId.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl mt={4} isInvalid={errors.daysActive && errors.daysActive.message}>
								<FormLabel htmlFor="daysActive">Days Active</FormLabel>
								{/* <WeekdayButtonGroup daysActive={daysActive} onChange={setDaysActive} /> */}
								<FormErrorMessage>
									{errors.daysActive && errors.daysActive.message}
								</FormErrorMessage>
							</FormControl>
							<Flex>
								<FormControl mt={4} mr={4} isInvalid={errors.startTime && errors.startTime.message}>
									<FormLabel>Start Time</FormLabel>
									<Input
										name="startTime"
										ref={register({
											required: 'Please enter a start time.'
										})}
										placeholder="7pm"
									/>
									<FormErrorMessage>
										{errors.startTime && errors.startTime.message}
									</FormErrorMessage>
								</FormControl>
								<FormControl mt={4} isInvalid={errors.endTime && errors.endTime.message}>
									<FormLabel>End Time</FormLabel>
									<Input
										name="endTime"
										ref={register({
											required: 'Please enter an end time.'
										})}
										placeholder="2am"
									/>
									<FormErrorMessage>{errors.endTime && errors.endTime.message}</FormErrorMessage>
								</FormControl>
							</Flex>
						</ModalBody>

						<ModalFooter>
							<Button onClick={onClose}>Cancel</Button>
							<Button type="submit" leftIcon="check" variantColor="orange" ml={3}>
								Create
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	)
}

export default AddDeal
