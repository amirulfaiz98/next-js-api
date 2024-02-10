import fs from 'fs';
import path from 'path';

function buildFeedbackPath() {
    return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractFeedbackPath(filePath) {
    const fileData = fs.readFileSync(filepath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email : email,
            text : feedbackText
        }

        // store in database
        const filepath = buildFeedbackPath();
        const data = extractFeedbackPath(filepath);
        data.push(newFeedback);
        fs.watchFileSync(filepath, JSON.stringify(data));

        res.status(201).json({ message: 'Success', feedback: newFeedback });
    }else {
        const filepath = buildFeedbackPath();
        const data = extractFeedbackPath(filepath)
        res.status(200).json({ feedback: data });
    }
    
}

export default handler;