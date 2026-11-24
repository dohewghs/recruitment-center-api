SELECT
    r.recruit_id,
    r.full_name,
    COUNT(DISTINCT a.unit_id) AS unit_count
FROM recruits r
JOIN assignments a
    ON r.recruit_id = a.recruit_id
GROUP BY r.recruit_id, r.full_name
HAVING COUNT(DISTINCT a.unit_id) > 1;