SELECT DISTINCT
    rc.center_id,
    rc.name,
    rc.city
FROM recruitment_centers rc
JOIN courses c
    ON rc.center_id = c.center_id
JOIN training_sessions ts
    ON c.course_id = ts.course_id
WHERE ts.session_date >= CURRENT_DATE - INTERVAL '1 year'
AND ts.session_date <= CURRENT_DATE;
