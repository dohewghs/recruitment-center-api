SELECT
    rc.center_id,
    rc.name,
    SUM(ei.quantity) AS total_equipment
FROM recruitment_centers rc
JOIN trainings t
    ON rc.center_id = t.center_id
JOIN equipment_issues ei
    ON t.training_id = ei.training_id
GROUP BY rc.center_id, rc.name
ORDER BY total_equipment DESC;