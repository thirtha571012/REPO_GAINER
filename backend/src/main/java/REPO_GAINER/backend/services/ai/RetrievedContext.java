package REPO_GAINER.backend.services.ai;

import java.util.List;

import REPO_GAINER.backend.dto.CitationDto;

public record RetrievedContext(
        List<CitationDto> citations,
        String contextText) {
}