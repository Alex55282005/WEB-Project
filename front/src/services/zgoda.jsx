import Header from "../scripts/header";
import Footer from "../scripts/footer";
import "../styles/services.css";

function Zgoda() {
    return(
        <div className="container">
            <Header/>
            <div className="main-serv">
                <h1>SALE-PURCHASE AGREEMENT OF AUTOMOBILE PARTS</h1>
                <p>This Agreement is entered into between:</p>

                <p><strong>Seller:</strong>
                    (Full name or company name of the Seller)
                    (Mailing address of the Seller)
                    (Contact phone numbers of the Seller)
                    (Email of the Seller)</p>
                    
                <p><strong>and</strong></p>
                    
                <p><strong>Buyer:</strong>
                    (Full name or company name of the Buyer)
                    (Mailing address of the Buyer)
                    (Contact phone numbers of the Buyer)
                    (Email of the Buyer)</p>
                    
                <ol>
                    <li>
                        <strong>Subject of the agreement:</strong>
                        The Seller undertakes to sell, and the Buyer undertakes to purchase automobile parts specified in the annex to this Agreement.
                    </li>
                    <li>
                        <strong>Price and payment:</strong>
                        <ol>
                            <li>2.1. The total cost of the automobile parts is (amount in hryvnias).</li>
                            <li>2.2. The Buyer undertakes to pay this amount to the Seller within (term, for example, 14 days) from the moment of signing this Agreement.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Transfer of ownership:</strong>
                        Ownership of the automobile parts transfers to the Buyer upon full payment in accordance with clause 2 of this Agreement.
                    </li>
                    <li>
                        <strong>Condition of the automobile parts:</strong>
                        <ol>
                            <li>4.1. The Seller guarantees that the automobile parts correspond to the description provided in the annex to this Agreement.</li>
                            <li>4.2. The Buyer has the right to inspect the condition of the automobile parts before accepting them into possession.</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Responsibility of the parties:</strong>
                        Both parties are responsible for the breach of the terms of this Agreement in accordance with the current legislation.
                    </li>
                    <li>
                        <strong>Final provisions:</strong>
                        <ol>
                            <li>6.1. This Agreement is a legal agreement between the parties and regulates their mutual relations.</li>
                            <li>6.2. Amendments or additions to this Agreement are valid only with the written consent of both parties.</li>
                        </ol>
                    </li>
                </ol>
                    
                <p>This Agreement is executed and signed by both parties in ___________ (place) ____________ (date).</p>
                    
                <p><strong>Seller's Signature:</strong> ______________</p>
                <p>(Name and signature of the Seller)</p>
                    
                <p><strong>Buyer's Signature:</strong> _______________</p>
                <p>(Name and signature of the Buyer)</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Zgoda;