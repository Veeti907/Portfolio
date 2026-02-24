import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <h1 className="contact-title">Ota Yhteyttä</h1>
                <p className="contact-subtitle">Kiinnostunut yhteistyöstä? Ota minuun yhteyttä alla olevien tietojen kautta.</p>
                
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">📧</div>
                        <h3 className='info-title'>Sähköposti</h3>
                            <p className="info-text"><a href="mailto:veetibalk@gmail.com">veetibalk@gmail.com</a></p>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">📱</div>
                        <h3 className='info-title'>Puhelin</h3>
                        <p className="info-text"><a href="tel:+358452100767">+358 45 2100767</a></p>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <h3 className='info-title'>Sijainti</h3>
                        <p className="info-text">Oulu, Suomi</p>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">⏰</div>
                        <h3 className='info-title'>Saatavilla</h3>
                        <p className="info-text">Ma - Pe: 8:00 - 17:00</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}
export default Contact;