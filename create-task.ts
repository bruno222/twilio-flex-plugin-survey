require('dotenv').config();
import { Twilio } from 'twilio';

const run = async () => {
  const client = new Twilio(process.env!.TWILIO_ACCOUNT_SID!, process.env!.TWILIO_AUTH_TOKEN!, { edge: 'frankfurt' });

  const workspaceSid = 'WS8137ba265fc37ffc387a36de6d5bc2f5';
  const workflowSid = 'WW991ba5195ae361494ea771ad06486061'; // 1. New Workflow > 2. TaskReservation timeout: 600 > 3. Default task queue: Everyone

  const attributes = {
    customerPhone: '+49123',
    name: 'Bob Coletti',
    journey: 'new car policy',
    questions: [
      { stars: 3, title: 'Easy to buy' },
      { stars: 4, title: 'Pricing' },
    ],
    overallStars: 2,
    details: `I had issues on uploading documents larger than 50 mb.`,
  };

  const task = await client.taskrouter.workspaces(workspaceSid).tasks.create({
    taskChannel: 'survey',
    workflowSid,
    attributes: JSON.stringify(attributes),
  });

  console.log('tasks', task);
};

run();
