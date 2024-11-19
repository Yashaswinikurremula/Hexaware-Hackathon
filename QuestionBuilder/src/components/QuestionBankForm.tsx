import React, { useState } from 'react';
import { BookOpen, Upload, Download } from 'lucide-react';

interface QuestionBankFormProps {
  onSubmit: (data: any) => void;
}

const QuestionBankForm = ({ onSubmit }: QuestionBankFormProps) => {
  const [technology, setTechnology] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState(50);
  const [questionCount, setQuestionCount] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ technology, topic, difficulty, questionCount });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Technology</label>
          <select
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className="mt-1 input-field"
            required
          >
            <option value="">Select Technology</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="react">React</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 input-field"
            required
          >
            <option value="">Select Topic</option>
            <option value="basics">Basics</option>
            <option value="advanced">Advanced</option>
            <option value="algorithms">Algorithms</option>
            <option value="best-practices">Best Practices</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Difficulty Level: {difficulty}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={difficulty}
            onChange={(e) => setDifficulty(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Easy</span>
            <span>Medium</span>
            <span>Hard</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Questions
          </label>
          <input
            type="number"
            min="1"
            max="50"
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="mt-1 input-field"
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        Generate Questions
      </button>
    </form>
  );
};

export default QuestionBankForm;