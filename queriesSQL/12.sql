SELECT
    r.recruit_id,
    r.full_name,
    COUNT(DISTINCT tp.training_id) AS training_count
FROM recruits r
JOIN training_participants tp
    ON r.recruit_id = tp.recruit_id
GROUP BY r.recruit_id, r.full_name
HAVING COUNT(DISTINCT tp.training_id) = (
    SELECT MAX(training_count)
    FROM (
        SELECT
            COUNT(DISTINCT training_id) AS training_count
        FROM training_participants
        GROUP BY recruit_id
    ) AS counts
);