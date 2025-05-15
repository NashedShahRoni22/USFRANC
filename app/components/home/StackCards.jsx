import Image from "next/image";
import stackImg1 from "../../assets/stack-1.png";
import stackImg2 from "../../assets/stack-2.png";
import stackImg3 from "../../assets/stack-3.png";
import stackImg4 from "../../assets/stack-4.png";
import stackImg5 from "../../assets/stack-5.png";
import stackImg6 from "../../assets/stack-6.png";
import Container from "../shared/Container";

export default function StackCards() {
    const images = [stackImg1, stackImg2, stackImg3, stackImg4, stackImg5, stackImg6]
    return (
        <Container>
            <div className="p-8">
                {
                    images.map((image, index) => <Image key={index} src={image} alt="use_franck images" className={`sticky top-20 w-full rounded-xl shadow`} />)
                }
            </div>
        </Container>
    )
}
