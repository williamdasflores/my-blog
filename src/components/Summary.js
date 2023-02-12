import goku from "../images/goku.jpg";
import { SummaryContainer } from "../styles/SummaryContainer";


export const Summary = () => (
    <>
        <SummaryContainer>
            <div>
                <div className="my-image">
                    <img src={goku} width={170} height={150} style={{ borderRadius: "50%" }} />
                </div>
                <div className="summary-text">
                    <h2>William Flores</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus pharetra consequat.
                        Curabitur pellentesque, arcu eu mollis rhoncus, nulla nunc accumsan orci, sed placerat arcu
                        dolor in mi. Proin vel ullamcorper urna. Proin sit amet pharetra erat. Nam elit dui,
                        tincidunt eget est ac, eleifend egestas felis. Nunc dictum dui lorem, eget imperdiet lectus
                        consectetur vehicula. Donec at leo in lacus ullamcorper luctus. Phasellus ut nisi tempor,
                        pretium tellus eget, cursus ipsum. Vivamus cursus hendrerit tortor.
                    </p>
                </div>
            </div>
        </SummaryContainer>
    </>
)