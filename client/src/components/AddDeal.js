/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, {
	useState, useRef, useEffect, useContext
} from 'react'
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
} from '@chakra-ui/core'
import { useQuery, useMutation } from '@apollo/client'
import { Auth } from 'aws-amplify'
import { Context as UserContext } from '../context/UserContext'
import { GET_RESTAURANTS_QUERY } from '../graphql/queries'
import { CREATE_DEAL_MUTATION } from '../graphql/mutations'

const AddDeal = () => {
	const userContext = useContext(UserContext)

	const initialRef = useRef()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { handleSubmit, register, errors } = useForm()

	const [dealType, setDealType] = useState('Food')
	const [restaurants, setRestaurants] = useState([])
	const { data } = useQuery(GET_RESTAURANTS_QUERY)
	const [createDeal] = useMutation(CREATE_DEAL_MUTATION)

	useEffect(() => {
		if (data && data.restaurant) {
			setRestaurants(data.restaurant)
		}
	}, [data])

	const onCreateDeal = async ({
		dealType, title, description, restaurantId
	}, onClose) => {
		const addDealVariables = {
			title,
			description,
			dealType,
			restaurantId,
		}

		const user = await Auth.currentAuthenticatedUser()
		const idToken = user.signInUserSession.idToken.jwtToken

		createDeal({
			variables: addDealVariables,
			context: {
				headers: {
					Authorization: `Bearer ${idToken}`
				}
			}
		})

		onClose()
	}

	return (
		<>
			<Button
				leftIcon="add"
				isDisabled={!userContext.state.isAuthenticated}
				onClick={onOpen}
				variantColor="orange"
				variant="solid"
				minH="40px"
				w="100%"
				data-testid="addDeal"
			>
				Add New Deal
			</Button>
			<Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size="25rem">
				<ModalOverlay />
				<ModalContent borderRadius={4}>
					<form
						onSubmit={handleSubmit((data) => onCreateDeal(
							{
								dealType,
								title: data.title,
								description: data.description,
								restaurantId: data.restaurantId,
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
							<FormControl mt={4} isInvalid={errors.title && errors.title.message}>
								<FormLabel>Title</FormLabel>
								<Input
									name="title"
									ref={register({
										required: 'Please enter a title.'
									})}
									placeholder="Free Drink with $10 order"
								/>
								<FormErrorMessage>
									{errors.title && errors.title.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl mt={4} isInvalid={errors.description && errors.description.message}>
								<FormLabel>Description</FormLabel>
								<Input
									name="description"
									ref={register({
										required: 'Please enter a description.'
									})}
									placeholder="Free drink with an order of wings"
								/>
								<FormErrorMessage>
									{errors.description && errors.description.message}
								</FormErrorMessage>
							</FormControl>
							<FormControl mt={4} isInvalid={errors.restaurantId && errors.restaurantId.message}>
								<FormLabel htmlFor="location">Restaurant</FormLabel>
								<Select
									ref={register({
										required: 'Please select a location.'
									})}
									name="restaurantId"
									id="restaurantId"
									placeholder="Select a Restaurant"
									data-testid="selectRestaurant"
								>
									{restaurants && restaurants.map((restaurant) => (
										<option key={restaurant.id} value={restaurant.id}>
											{restaurant.name}
										</option>
									))}
								</Select>
								<FormErrorMessage>
									{errors.restaurantId && errors.restaurantId.message}
								</FormErrorMessage>
							</FormControl>
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
