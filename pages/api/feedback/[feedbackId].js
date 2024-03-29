import { buildFeedbackPath, extractFeedback } from ".";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filepath = buildFeedbackPath();
  const feedbackData = extractFeedback(filepath);

  const selectedFeedback = feedbackData.find((item) => item.id === feedbackId);
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
