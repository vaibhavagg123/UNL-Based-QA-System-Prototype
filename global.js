var questionObject = [],
answerObject = [],
canFindAnswer = 0,
checkIfQuestionIsCorrect = 1,
IsFullOrPartialMatch = 2;


var answerRelationName = "",
         argumentToMatch = "",
	 answerArgumentIndex = "",
    	questionInput,
        questionFile,
        textType,
	 indexOfQuestionRelation = -1,
	 originalQuestionObject,
	 originalAnswerObject,
 	 answer = "",
     answerInput,
     answerFile,
     probableAnswers = [],
     matchCount = 0;