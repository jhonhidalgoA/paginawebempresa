import Title from "@components/ui/title/Title";
import ValueCard from "@components/ui/valueCard/ValueCard";
import ProcessStep from "@components/ui/processStep/ProcessStep";
import { processData, valuesData } from "@data/processData";
import "./ProcessPage.css";

export default function ProcessPage() {
  return (
    <section className="process" id="process">
      <div className="process__container">
        <div className="process__block">
          <Title page="values" />
          <div className="process__values">
            {valuesData.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>

        <div className="process__block">
          <Title page="process" />
          <ol className="process__list">
            {processData.map((step, index) => (
              <ProcessStep key={step.id} step={step} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}