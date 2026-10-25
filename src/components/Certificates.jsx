import CertCard from "./ItemCard";

function Certificates() {
    return (
        <div>
            <div className="section-header mb-3">
                <h2>Certifications</h2>
                <small className="text-muted">
                    Professional certifications earned during my academic
                    journey.
                </small>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 col-lg-6 mb-3">
                    <CertCard
                        imgLink="pmi.png"
                        itemTitle="PMI Project Management Ready"
                        itemDescription="PMI Project Management Ready Exam; Administered by: NU Dasmariñas"
                        viewItemName="Certificate"
                        projectLink="PMI-Project-Management-Ready.pdf"
                    />
                </div>
                <div className="col-md-6 col-lg-6 mb-3">
                    <CertCard
                        imgLink="java-its.png"
                        itemTitle="Information Technology Specialist in Java"
                        itemDescription="Java Exam; Administered by: NU Dasmariñas"
                        viewItemName="Certificate"
                        projectLink="JAVA-ITS-Certification.pdf"
                    />
                </div>
            </div>
        </div>
    );
}

export default Certificates;
