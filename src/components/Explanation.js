import React from "react";

function Explanation(props) {
  return (props.language === "english") ? (
    <div style={{ margin: "0px 10vw" }}>
      <h1>MBTI:</h1>
      <p>
        The Myers-Briggs Type Indicator (MBTI) is a personality test that was created by Katharine Cook Briggs and her daughter Isabel Briggs Myers. It is based on the theories of Carl Jung, who believed that people experience the world using four principal psychological functions: sensation, intuition, feeling, and thinking. These functions are expressed in two attitudes: extraversion and introversion. The MBTI is used to determine a person's personality type based on their preferences in these four areas.
        For more elaboration on MBTI, go ahead to the menu and click on "learn more".
      </p>
      <h1>How we figure out the best jobs for you:</h1>
      <p>
        We use the 8 cognitive functions mentioned in the link, (Te, Ti, Fe, Fi, Ne, Ni, Se, and Si), to determine it.<br /><br />
        First, we assign each cognitive function a weight that represents how much this function is needed in a certain job. For example, Data Scientists require a lot of creativity and problem solving, which are represented mostly by Ne and Ti, so we give each of them a weight of 30. But Data Scientists require no introspection, which is represented by Fi, so we give it a weight of 0.<br /><br />
        The total weight for each job should be 100. Then, we calculate a score for each job based on the user's cognitive functions. For example, if the user has a high score in Ne and Ti, and a low score in Fi, then the user is more likely to be a Data Scientist. We do this by multiplying a function's score with its weight for each cognitive function and summing each result.<br /><br />
        Now that we have a score for each job, we compare each score and output the highest values, where the jobs output other than the first one are only shown if the difference between their score and the first job's score is lower than 5%. This is to ensure that the user is not overwhelmed with too many options.<br /><br />
        Think of it like a GPA calculation, where the highest GPA is the best job for you and the weight represents the credit hours.
      </p>
    </div>
  ) : (
    <div dir = "rtl" style={{ margin: "0px 10vw" }}>
      <h1>MBTI:</h1>
      <p>
        مؤشر مايرز بريجز لأنماط الشخصية (MBTI) هو اختبار شخصية أنشأته كاثرين كوك بريجز وابنتها إيزابيل بريجز مايرز. يعتمد الاختبار على نظريات كارل يونغ، الذي كان يؤمن بأن الناس يدركون العالم باستخدام أربع وظائف نفسية رئيسية: الإحساس، الحدس، الشعور، والتفكير. تُعبَّر هذه الوظائف في توجهين: الانبساط والانطواء. يُستخدم مؤشر MBTI لتحديد نوع شخصية الفرد بناءً على تفضيلاته في هذه المجالات الأربعة.
        للمزيد من التفاصيل حول MBTI، تفضل بالدخول إلى القائمة والنقر على "learn more".
      </p>
      <h1>كيف نحدد أفضل الوظائف لك:</h1>
      <p>
        نستخدم الوظائف المعرفية الثمانية المذكورة في الرابط (Te, Ti, Fe, Fi, Ne, Ni, Se, Si) لتحديد ذلك.<br /><br />
        أولاً، نقوم بتعيين وزن لكل وظيفة معرفية يمثل مدى أهمية هذه الوظيفة في وظيفة معينة. على سبيل المثال، يحتاج علماء البيانات إلى الكثير من الإبداع وحل المشكلات، وهذان العاملان يمثلهما غالباً Ne و Ti، لذا نعطي كل منهما وزناً قدره 30. بينما علماء البيانات لا يحتاجون إلى الاستبطان، الذي يمثله Fi، لذا نعطيه وزناً قدره 0.<br /><br />
        يجب أن يكون المجموع الكلي للأوزان لكل وظيفة 100. ثم نقوم بحساب درجة لكل وظيفة بناءً على وظائف المستخدم المعرفية. على سبيل المثال، إذا كانت درجة المستخدم مرتفعة في Ne و Ti، ومنخفضة في Fi، فإن المستخدم يكون أكثر احتمالاً لأن يكون عالم بيانات. نقوم بذلك عن طريق ضرب درجة كل وظيفة في وزنها الخاص لكل وظيفة معرفية وجمع النتائج.<br /><br />
        بعد أن نحصل على درجة لكل وظيفة، نقارن الدرجات ونخرج أعلى القيم، حيث تُعرض الوظائف الأخرى غير الأولى فقط إذا كان الفرق بين درجتها ودرجة الوظيفة الأولى أقل من 5%. وذلك لضمان عدم إرباك المستخدم بعدد كبير من الخيارات.<br /><br />
        فكر في الأمر مثل حساب المعدل التراكمي (GPA)، حيث أن أعلى معدل هو أفضل وظيفة لك، والوزن يمثل عدد الساعات المعتمدة.
      </p>
    </div>
  );
}

export default Explanation;
