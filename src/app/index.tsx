import GlobalBackground from "./../common/components/misc/GlobalBackground";
import Section from "./../common/components/misc/Section";
import MyProjectsSubSection from "./../common/components/section/MyProjectsSubSection";

export default function Home() {
  return (
    <>
      <div>
        <GlobalBackground />
        <Section className="mt-[70vh]">
          <MyProjectsSubSection></MyProjectsSubSection>
        </Section>
      </div>
      <div className="hidden bg-indigo-200 bg-amber-200 bg-red-200 bg-orange-200 bg-yellow-200 bg-slate-200 bg-green-300 bg-purple-200 bg-gray-200 bg-blue-200"></div>
    </>
  );
}
