import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, useNumberInput, useToast } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"

function ReservationForm() {
    const now = new Date()
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            date: '',
            time: '',
            count: 1
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            date: Yup.date().min(now).required('Required'),
            time: Yup.string().required('Required'),
            count: Yup.number().required('Required')
        }),
        onSubmit: values => {
            console.log(values)
            toast({
                title: 'Table Reserved.',
                description: `Hey, ${values.name}! We've reserved your table for you.`,
                status: 'success',
                duration: 5000,
                position: "top-right",
                isClosable: true,
            })
        }
    })

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        defaultValue: formik.values.count,
        min: 1,
        max: 6,
        name: "count",
        onChange: formik.handleChange
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>

            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Eg: Tony Stark"
                />
                {formik.touched.name && formik.errors.name ?
                    <FormErrorMessage>{formik.touched.name && formik.errors.name}</FormErrorMessage>
                    : null}
            </FormControl>

            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Eg: tonystark@mcu.com"
                />
                {formik.touched.email && formik.errors.email ?
                    <FormErrorMessage>{formik.touched.email && formik.errors.email}</FormErrorMessage>
                    : null}
            </FormControl>

            <FormControl isInvalid={formik.touched.date && formik.errors.name}>
                <FormLabel>Date</FormLabel>
                <Input
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    placeholder={`${now.toString()}`}
                />
                {formik.touched.date && formik.errors.date ?
                    <FormErrorMessage>{formik.touched.date && formik.errors.date}</FormErrorMessage>
                    : null}
            </FormControl>

            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel>Time</FormLabel>
                <Input
                    name="time"
                    type="time"
                    onChange={formik.handleChange}
                    value={formik.values.time}
                    placeholder={`${now.toString()}`}
                />
                {formik.touched.time && formik.errors.time ?
                    <FormErrorMessage>{formik.touched.time && formik.errors.time}</FormErrorMessage>
                    : null}
            </FormControl>

            <FormControl>
                <FormLabel>Members</FormLabel>
                <HStack>
                    <Button {...dec}>-</Button>
                    <Input
                        {...input}
                        textAlign="center"
                        readOnly
                    />
                    <Button {...inc}>+</Button>
                </HStack>
                {formik.touched.count && formik.errors.count ?
                    <FormErrorMessage>{formik.touched.count && formik.errors.count}</FormErrorMessage>
                    : null}
            </FormControl>

            <Button
                size="lg"
                colorScheme="teal"
                bg="teal.800"
                type="submit"
            >
                Make Reservation
            </Button>
        </form>
    )
}

export default ReservationForm