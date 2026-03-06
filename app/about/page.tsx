import Container from "@/components/Container";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">About this version</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            This version is redesigned for purpose and user experience. It prioritises readability, learning flow and classroom use.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-slate-900">What changed</div>
                <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-slate-700">
                  <li>White background for clarity and classroom use</li>
                  <li>No decorative connector lines</li>
                  <li>Clear journeys and pathway entry points</li>
                  <li>Better concept support for reflection and discussion</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="text-sm font-semibold text-slate-900">How to use it</div>
                <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-slate-700">
                  <li>Start with a journey for structured learning</li>
                  <li>Use pathways for systems thinking</li>
                  <li>Use concept cards for discussion and reflection</li>
                  <li>Search the wider graph for deeper inquiry</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
