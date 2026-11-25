SELECT
    ts.session_id,
    ts.session_date,
    ts.topic,
    c.title,
    rc.name AS center_name
FROM training_sessions ts
JOIN courses c
    ON ts.course_id = c.course_id
JOIN recruitment_centers rc
    ON c.center_id = rc.center_id
WHERE rc.name = $1
ORDER BY ts.session_date;