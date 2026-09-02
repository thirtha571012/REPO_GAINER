package REPO_GAINER.backend.dto;

import java.time.Instant;
import java.util.UUID;

import REPO_GAINER.backend.entity.IndexStatus;

public record IndexStatusResponse(
    UUID repositoryId,
    IndexStatus indexStatus,
    int filesTotal,
    int filesProcessed,
    int chunkCount,
    Instant indexedAt,
    String errorMessage
) {
}