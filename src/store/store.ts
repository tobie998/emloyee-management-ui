import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/authSlice';
import EmployeeReducer from './employees/employee/employeeSlice';
import AwardReducer from './employees/employee/awardSlice';
import GivenDegreeReducer from './employees/employee/givenDegreeSlice';
import LanguageKnowledgeReducer from './employees/employee/languageKnowledgeSlice';
import PracticalResearchReducer from './employees/employee/practicalResearch';
import PunishmentReducer from './employees/employee/punishmentSlice';
import ResearchAssessmentReducer from './employees/employee/researchAssessmentSlice';
import ResearchCategoryReducer from './employees/employee/researchCategorySlice';
import ResearchMajorReducer from './employees/employee/researchMajorSlice';
import ResearchProjectReducer from './employees/employee/researchProjectSlice';
import RewardReducer from './employees/employee/rewardSlice';
import TeachingRoleReducer from './employees/employee/teachingRoleSlice';
import TrainingProcessReducer from './employees/employee/trainingProcessSlice';
import UnitReducer from './employees/employee/unitSlice';
import WorkingRoleReducer from './employees/employee/workingRoleSlice';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        employee: EmployeeReducer,
        award: AwardReducer,
        givenDegree: GivenDegreeReducer,
        languageKnowledge: LanguageKnowledgeReducer,
        practicalResearch: PracticalResearchReducer,
        punishment: PunishmentReducer,
        researchAssessment: ResearchAssessmentReducer,
        researchCategory: ResearchCategoryReducer,
        researchMajor: ResearchMajorReducer,
        researchProject: ResearchProjectReducer,
        reward: RewardReducer,
        teachingRole: TeachingRoleReducer,
        trainingProcess: TrainingProcessReducer,
        unit: UnitReducer,
        workingRole: WorkingRoleReducer,
    },
});

export default store;
