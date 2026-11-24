WITH unit_counts AS (
    SELECT
        u.unit_id,
        u.unit_name,
        COUNT(a.recruit_id) AS recruit_count
    FROM military_units u
    LEFT JOIN assignments a
        ON u.unit_id = a.unit_id
        AND a.ended_at IS NULL
    GROUP BY u.unit_id, u.unit_name
)
SELECT
    unit_id,
    unit_name,
    recruit_count
FROM unit_counts
WHERE recruit_count = (
    SELECT MAX(recruit_count)
    FROM unit_counts
);