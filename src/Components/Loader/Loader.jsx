import { BallTriangle  } from 'react-loader-spinner'
import { Container } from './Loader.styled'


export const Loader = () => {
    return (
        <Container>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#407bff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </Container>
    )
}